// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.Event
export interface Event {
	StartTime: number;
	EndTime: number;
	Pps: number;
	Ip: string;
	Mbps: number;
	Status: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribeDdosEventResponse
export interface DescribeDdosEventResponse {
	RequestId: string;
	Total: number;
	Events: Event[];
}

