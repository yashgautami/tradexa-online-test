
export interface company_interface {
    bs: string
    catchPhrase: string
    name: string
  }
  
  export interface geoLocation_interface {
    lat: string
    lng: string
  }
  
  export interface address_interface {
    city: string
    geo: geoLocation_interface
    street: string
    suite: string
    zipcode: string
  }
  
  export interface user_interface {
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
    address: address_interface
    company: company_interface
  }