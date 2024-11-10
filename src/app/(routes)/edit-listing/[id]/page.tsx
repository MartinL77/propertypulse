'use client';

import React, { useEffect } from 'react';
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
import { usePathname } from 'next/navigation';
import { supabase } from '../../../../../utils/supabase/client';
import { toast } from 'sonner';
import { GetStaticPropsContext } from 'next'

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

const EditListing: React.FC = () => {
    const params = usePathname();

    useEffect(() => {
        console.log(params.split('/')[2]);
    }, [params])

    const onSubmitHandler = async (formValue: FormValues) => {
        const { data, error } = await supabase
        .from('listing')
        .update(formValue)
        .eq('id', params.split('/')[2])
        .select()

        if (data) {
            console.log(data);
            toast('Listing updated and published');
        }
        if (error) {
            console.error(error);
            toast('Error updating listing');
        }
    }

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
          console.log("Form Submitted", values);
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

// **Static Generation** for dynamic routes
export async function getStaticPaths() {
    const { data: listings, error } = await supabase.from('listing').select('id');
  
    if (error) {
      console.error(error);
      return {
        paths: [],
        fallback: false, 
      };
    }
  
    const paths = listings.map((listing) => ({
      params: { id: listing.id.toString() },
    }));
  
    return {
      paths,
      fallback: false, 
    };
  }
  
  export async function getStaticProps({ params }: GetStaticPropsContext<{ id: string }>) {
    if (!params || !params.id) {
        return {
          notFound: true, 
        };
    }
    
    const { data, error } = await supabase
      .from('listing')
      .select('*')
      .eq('id', params.id)
      .single();
  
    if (error) {
      console.error(error);
      return {
        notFound: true, 
      };
    }
  
    const initialValues: FormValues = {
      propertyType: data.propertyType,
      bedroom: data.bedroom,
      bathroom: data.bathroom,
      parking: data.parking,
      lotSize: data.lotSize,
      builtIn: data.builtIn,
      area: data.area,
      price: data.price,
      description: data.description,
    };
  
    return {
      props: {
        listingId: params.id,
        initialValues,
      },
    };
  }

export default EditListing;
