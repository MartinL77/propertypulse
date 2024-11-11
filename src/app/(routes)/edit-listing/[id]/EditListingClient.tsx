'use client';

import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  FormWrapper,
  Label,
  Select,
  Input,
  Button,
  GridContainer,
  TextArea,
} from './editListing.styled';
import { supabase } from '../../../../../utils/supabase/client';
import { toast } from 'sonner';

interface FormValues {
  propertyType: string;
  bedroom: string;
  bathroom: string;
  parking: string;
  lotSize: string;
  builtIn: string;
  area: string;
  price: string;
  description: string;
}

interface EditListingClientProps {
  id: Promise<string>;
}

const EditListingClient: React.FC<EditListingClientProps> = ({ id }) => {
    const [resolvedId, setResolvedId] = useState<string | null>(null);

  useEffect(() => {
    const resolveId = async () => {
      const resolved = await id; 
      setResolvedId(resolved);  
    };

    resolveId();
  }, [id]); 

  if (!resolvedId) {
    return <div>Loading...</div>;
  }

  const onSubmitHandler = async (formValue: FormValues) => {
    const { data, error } = await supabase
      .from('listing')
      .update(formValue)
      .eq('id', resolvedId)
      .select();

    if (data) {
      console.log(data);
      toast('Listing updated and published');
    }

    if (error) {
      console.error(error);
      toast('Error updating listing');
    }
  };

  return (
    <>
      <h1>Enter some more details</h1>
      <Formik<FormValues>
        initialValues={{
          propertyType: '',
          bedroom: '',
          bathroom: '',
          parking: '',
          lotSize: '',
          builtIn: '',
          area: '',
          price: '',
          description: '',
        }}
        onSubmit={(values) => {
          console.log('Form Submitted', values);
          onSubmitHandler(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <Label>Property Type</Label>
              <Select
                name="propertyType"
                value={values.propertyType}
                onChange={handleChange}
              >
                <option value="">Select Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
              </Select>

              <GridContainer>
                <div>
                  <Label>Bedroom</Label>
                  <Input
                    type="number"
                    name="bedroom"
                    value={values.bedroom}
                    onChange={handleChange}
                    placeholder="Ex. 2"
                  />
                </div>

                <div>
                  <Label>Bathroom</Label>
                  <Input
                    type="number"
                    name="bathroom"
                    value={values.bathroom}
                    onChange={handleChange}
                    placeholder="Ex. 2"
                  />
                </div>

                <div>
                  <Label>Parking</Label>
                  <Input
                    type="number"
                    name="parking"
                    value={values.parking}
                    onChange={handleChange}
                    placeholder="Ex. 2"
                  />
                </div>

                <div>
                  <Label>Lot Size (Sq. Ft)</Label>
                  <Input
                    type="number"
                    name="lotSize"
                    value={values.lotSize}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label>Built In</Label>
                  <Input
                    type="text"
                    name="builtIn"
                    value={values.builtIn}
                    onChange={handleChange}
                    placeholder="Ex. 2001"
                  />
                </div>

                <div>
                  <Label>Area (Sq. Ft)</Label>
                  <Input
                    type="number"
                    name="area"
                    value={values.area}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label>Selling Price ($)</Label>
                  <Input
                    type="number"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                  />
                </div>
              </GridContainer>

              <Label>Description</Label>
              <TextArea
                name="description"
                value={values.description}
                onChange={handleChange}
              />

              <Button type="button">Save</Button>
              <Button type="submit">Save & Publish</Button>
            </FormWrapper>
          </form>
        )}
      </Formik>
    </>
  );
};

export default EditListingClient;
