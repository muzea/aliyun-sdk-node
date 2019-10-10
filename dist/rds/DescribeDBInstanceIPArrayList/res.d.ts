// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DBInstanceIPArray
export interface DBInstanceIPArray {
	DBInstanceIPArrayName: string;
	DBInstanceIPArrayAttribute: string;
	SecurityIPType: string;
	SecurityIPList: string;
	WhitelistNetworkType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeDBInstanceIPArrayList
export interface ItemsInDescribeDBInstanceIPArrayList {
	DBInstanceIPArray: DBInstanceIPArray[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDBInstanceIPArrayListResponse
export interface DescribeDBInstanceIPArrayListResponse {
	RequestId: string;
	Items: ItemsInDescribeDBInstanceIPArrayList;
}

