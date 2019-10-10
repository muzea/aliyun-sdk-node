// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.ImageFile
export interface ImageFile {
	Bucket: string;
	Object: string;
	Location: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.RegisteredPersonage
export interface RegisteredPersonage {
	PersonName: string;
	FaceId: string;
	Target: string;
	Quality: string;
	Gender: string;
	ImageId: string;
	ImageFile: ImageFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.RegisteredPersonages
export interface RegisteredPersonages {
	RegisteredPersonage: RegisteredPersonage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FailedImage
export interface FailedImage {
	Code: string;
	Success: string;
	ImageFile: ImageFile;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.FailedImages
export interface FailedImages {
	FailedImage: FailedImage[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.RegisterMediaDetailPersonResponse
export interface RegisterMediaDetailPersonResponse {
	RequestId: string;
	RegisteredPersonages: RegisteredPersonages;
	FailedImages: FailedImages;
}

