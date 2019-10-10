// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.IspCityNode
export interface IspCityNode {
	CityCode: string;
	DefaultSelected: boolean;
	IspName: string;
	CountryName: string;
	CityName: string;
	Mainland: boolean;
	CountryCode: string;
	IspCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.IspCityNodesInDescribeGtmMonitorConfig
export interface IspCityNodesInDescribeGtmMonitorConfig {
	IspCityNode: IspCityNode[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmMonitorConfigResponse
export interface DescribeGtmMonitorConfigResponse {
	RequestId: string;
	MonitorConfigId: string;
	CreateTime: string;
	CreateTimestamp: number;
	UpdateTime: string;
	UpdateTimestamp: number;
	Name: string;
	ProtocolType: string;
	Interval: number;
	EvaluationCount: number;
	Timeout: number;
	MonitorExtendInfo: string;
	IspCityNodes: IspCityNodesInDescribeGtmMonitorConfig;
}

