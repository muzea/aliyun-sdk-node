export interface DescribeDownloadImageInfoRequest {
    /**
     * 业务ID
     * @example `P20220627101248000001`
     */
    "BizId"?: string;
    /**
     * 图片id。
     * @example `h5568374035170305`
     */
    "ImageId"?: string;
    /**
     * 图片类型
     * @example `基础版`
     */
    "SpecificationName"?: string;
    /**
     * ImageUserBuyId
     * @example `ImageUserBuyId`
     */
    "ImageUserBuyId"?: number;
    /**
     * 下载类型：-standard（默认值）：通用下载-file：文件下载
     * @example `2`
     */
    "DownloadType": string;
}
