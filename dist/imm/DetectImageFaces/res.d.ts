export interface DetectImageFacesResponse {
    /**
     * 当次请求的Request ID。
     * @example `6E93D6C9-5AC0-49F9-914D-E02678D3****`
     */
    RequestId: string;
    /**
     * 图片人脸信息列表。
     */
    Faces: any[];
}
