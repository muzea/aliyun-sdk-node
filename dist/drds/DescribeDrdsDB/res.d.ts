// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DataInDescribeDrdsDB
export interface DataInDescribeDrdsDB {
	DbName: string;
	Status: number;
	CreateTime: string;
	Msg: string;
	Mode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeDrdsDBResponse
export interface DescribeDrdsDBResponse {
	RequestId: string;
	Success: boolean;
	Data: DataInDescribeDrdsDB;
}

