type GeoIP = {
  country: string
  countrycode: string
  region: string
  city: string
  lat: number
  lon: number
  timezone: string
}

export type GetIpInfoResponse = {
  asn: string
  blacklists: Record<string, string>
  geoip1: GeoIP
  geoip2: GeoIP
  zip: string
  ip: string
  isp: string
  org: string
  status: boolean
  useragent: string
}
