// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ListItemInValidateShardTask
export interface ListItemInValidateShardTask {
	Item: string;
	Result: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.ValidateShardTaskResponse
export interface ValidateShardTaskResponse {
	RequestId: string;
	Success: boolean;
	List: ListItemInValidateShardTask[];
}

