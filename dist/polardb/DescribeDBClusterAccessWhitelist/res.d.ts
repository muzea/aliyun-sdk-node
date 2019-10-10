// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DBClusterIPArray
export interface DBClusterIPArray {
	DBClusterIPArrayName: string;
	DBClusterIPArrayAttribute: string;
	SecurityIps: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.ItemsInDescribeDBClusterAccessWhitelist
export interface ItemsInDescribeDBClusterAccessWhitelist {
	DBClusterIPArray: DBClusterIPArray[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/polardb.DescribeDBClusterAccessWhitelistResponse
export interface DescribeDBClusterAccessWhitelistResponse {
	RequestId: string;
	Items: ItemsInDescribeDBClusterAccessWhitelist;
}

