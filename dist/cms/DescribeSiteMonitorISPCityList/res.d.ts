// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.IspCity
export interface IspCity {
	IspName.zh_CN: string;
	CityName.zh_CN: string;
	IspName: string;
	Region.zh_CN: string;
	IspName.en: string;
	Country.en: string;
	Country.zh_CN: string;
	CityName.en: string;
	CityName: string;
	Isp: string;
	Region.en: string;
	City: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.IspCityList
export interface IspCityList {
	IspCity: IspCity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/cms.DescribeSiteMonitorISPCityListResponse
export interface DescribeSiteMonitorISPCityListResponse {
	Code: string;
	Message: string;
	Success: string;
	RequestId: string;
	IspCityList: IspCityList;
}

