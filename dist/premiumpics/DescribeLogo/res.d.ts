export interface DescribeLogoResponse {
    /**
     * 详细描述
     * @example `FontDescription`
     */
    FontDescription: string;
    /**
     * 请求id
     * @example `0FDB7AA6-CEA2-5948-B930-A01F5266D90E`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 品牌名称。
     * @example `吕記`
     */
    BrandName: string;
    /**
     * 镜像路径
     * @example `path
    `
     */
    NamePath: string;
    /**
     * 价签位置
     * @example `蓝`
     */
    ColorTwo: string;
    /**
     * 付费类型为包年包月时，返回的ivr主键
     * @example `绿`
     */
    ColorOne: string;
    /**
     * 授权详情描述
     * @example `红`
     */
    ColorDescription: string;
    /**
     * 是否开通日志：-true：开通-false：未开通
     * @example `red`
     */
    ColorThree: string;
    /**
     * 镜像详情。
     */
    Images: string[];
}
