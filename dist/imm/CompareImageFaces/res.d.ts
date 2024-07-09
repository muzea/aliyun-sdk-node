export interface CompareImageFacesResponse {
    /**
     * 当次请求的Request ID。
     * @example `F73AC982-2B9E-4ECD-AED5-F8331C5******`
     */
    RequestId: string;
    /**
     * 人脸相似度，该值越大则人脸相似度越高，取值范围为0～1。
     * @example `0.8848152756690983`
     */
    Similarity: number;
}
