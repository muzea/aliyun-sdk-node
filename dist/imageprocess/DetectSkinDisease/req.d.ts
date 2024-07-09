export interface DetectSkinDiseaseRequest {
    /**
     * 图像的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageprocess/DetectSkinDisease/DetectSkinDisease1.png`
     */
    "Url": string;
    /**
     * 数据来源机构代码。
     * @example `0001`
     */
    "OrgId": string;
    /**
     * 数据来源机构名称。
     * @example `demo`
     */
    "OrgName": string;
}
