// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.User
export interface User {
	MobilePhone: string;
	Comments: string;
	CreateDate: string;
	AttachDate: string;
	Email: string;
	UserId: string;
	UpdateDate: string;
	UserName: string;
	JoinDate: string;
	LastLoginDate: string;
	DisplayName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.VirtualMFADevice
export interface VirtualMFADevice {
	QRCodePNG: string;
	ActivateDate: string;
	Base32StringSeed: string;
	SerialNumber: string;
	User: User;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ram.CreateVirtualMFADeviceResponse
export interface CreateVirtualMFADeviceResponse {
	RequestId: string;
	VirtualMFADevice: VirtualMFADevice;
}

