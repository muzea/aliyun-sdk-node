export interface GenerateUploadUrlResponse {
    Success: boolean;
    Code: string;
    Message: string;
    Data: {
        AccessId: string;
        Policy: string;
        Signature: string;
        Folder: string;
        Host: string;
        Expire: number;
        Success: boolean;
        Message: string;
    };
    HttpStatusCode: number;
    RequestId: string;
}
