export interface DetailSubSceneResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `4F882EA7-3A1D-0113-94E4-70162C4****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 子场景id（加密ID）
     * @example `1234***`
     */
    Id: string;
    /**
     * 子场景名称
     * @example `子场景A`
     */
    Name: string;
    /**
     * 图片ID/视频ID（加密ID）
     * @example `1234***`
     */
    ResourceId: string;
    /**
     * 图片路径/视频路径
     * @example `https://image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg`
     */
    Url: string;
    /**
     * 图片路径/视频封面路径
     * @example `https://image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg`
     */
    CoverUrl: string;
    /**
     * 子场景状态 1.未重建 2.中间模型重建中 3.中间模型重建完成 4.待重建 5.服务商重建中 6.服务商重建完成 7.已发布 8.发布中
     * @example `1`
     */
    Status: number;
    /**
     * 创建时间
     * @example `1621236933677`
     */
    GmtCreate: number;
    /**
     * 最后修改时间
     * @example `1621236933677`
     */
    GmtModified: number;
    /**
     * 切图路径
     * @example `https://image-demo.oss-cn-hangzhou.aliyuncs.com/cubemap/****`
     */
    CubemapPath: string;
    /**
     * 原图路径
     * @example `http://www.aliyun.com/test.jpg`
     */
    OriginUrl: string;
    /**
     * 矫正后图的路径
     * @example `http://www.aliyun.com/test1.jpg`
     */
    ImageUrl: string;
    /**
     * 墙线标注数据
     * @example `{}`
     */
    LayoutData: string;
    /**
     * 资源类型
     * @example `IMAGE`
     */
    Type: string;
    /**
     * 视角坐标
     * @example `[-0.8928,-0.21467,0.39603]`
     */
    Position: string;
}
