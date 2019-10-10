// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.BandWidthMonitorDataItem
export interface BandWidthMonitorDataItem {
	UpBandWidth: number;
	DownBandWidth: number;
	InternetTX: number;
	InternetRX: number;
	TimeStamp: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.MonitorDataItem
export interface MonitorDataItem {
	MaxDownBandWidth: string;
	MaxUpBandWidth: string;
	BandWidthMonitorData: BandWidthMonitorDataItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeUserBandWidthDataResponse
export interface DescribeUserBandWidthDataResponse {
	RequestId: string;
	Code: number;
	MonitorData: MonitorDataItem[];
}

