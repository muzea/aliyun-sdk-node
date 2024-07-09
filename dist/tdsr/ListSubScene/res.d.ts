export interface ListSubSceneResponse {
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
     * 是否有下一页
     * @example `true`
     */
    HasNext: boolean;
    /**
     * 当前页
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 总页数
     * @example `5`
     */
    TotalPage: number;
    /**
     * 数据总条数
     * @example `100`
     */
    Count: number;
    /**
     * 子场景列表集
     */
    List: {
        /**
         * 子场景ID（加密ID）
         * @example `xsfwsddd==`
         */
        Id: string;
        /**
         * 子场景名称
         * @example `子场景A`
         */
        Name: string;
        /**
         * 图片ID/视频ID（加密ID）
         * @example `2345****`
         */
        ResourceId: string;
        /**
         * 图片路径/视频路径
         * @example `https:/image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg`
         */
        Url: string;
        /**
         * 图片路径/视频封面路径
         * @example `https:/image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg`
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
         * 资源名称（有两种：jpg/mp4）
         * @example `xxxx.jpg`
         */
        ResourceName: string;
        /**
         * 切图的路径（注意：有两种格式）
         * 1、****​/pano_src
         * 2、****​/cubemap
         * @example `****​/pano_src`
         */
        CubemapPath: string;
        /**
         * 是否删除
         * @example `true`
         */
        Deleted: boolean;
        /**
         * 原图地址
         * @example `https:/image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg`
         */
        OriginUrl: string;
        /**
         * 2k基准图路径
         * @example `https:/image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg`
         */
        BaseImageUrl: string;
        /**
         * 标注数据
         * @example `{}`
         */
        LayoutData: string;
        /**
         * 上传资源类型（IMAGE、VIDEO）
         * @example `IMAGE`
         */
        Type: string;
    }[];
}
