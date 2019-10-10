// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeLDAPConfigLdap0
export interface DescribeLDAPConfigLdap0 {
	BindDN: string;
	URI: string;
	SearchBase: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/nas.DescribeLDAPConfigResponse
export interface DescribeLDAPConfigResponse {
	RequestId: string;
	Ldap: DescribeLDAPConfigLdap0;
}

