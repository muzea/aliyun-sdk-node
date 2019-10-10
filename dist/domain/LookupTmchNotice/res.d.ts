// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.JurDesc
export interface JurDesc {
	JurCC: string;
	Desc: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.StreetInLookupTmchNotice
export interface StreetInLookupTmchNotice {
	Street: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Addr
export interface Addr {
	Cc: string;
	Pc: string;
	Sp: string;
	City: string;
	Street: StreetInLookupTmchNotice;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Holder
export interface Holder {
	Entitlement: string;
	Org: string;
	Addr: Addr;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Holders
export interface Holders {
	Holder: Holder[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Contact
export interface Contact {
	Type: string;
	Name: string;
	Org: string;
	Voice: string;
	Fax: string;
	Email: string;
	Addr: Addr;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Contacts
export interface Contacts {
	Contact: Contact[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.ClassDesc
export interface ClassDesc {
	ClassNum: number;
	Desc: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.ClassDescs
export interface ClassDescs {
	ClassDesc: ClassDesc[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Claim
export interface Claim {
	MarkName: string;
	GoodsAndServices: string;
	JurDesc: JurDesc;
	Holders: Holders;
	Contacts: Contacts;
	ClassDescs: ClassDescs;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.Claims
export interface Claims {
	Claim: Claim[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/domain.LookupTmchNoticeResponse
export interface LookupTmchNoticeResponse {
	RequestId: string;
	Id: number;
	NotBefore: string;
	NotAfter: string;
	Label: string;
	Claims: Claims;
}

