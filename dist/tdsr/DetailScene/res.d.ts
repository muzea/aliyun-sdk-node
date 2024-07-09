export interface DetailSceneResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `344794c32937474a9c59eb130936****`
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
     * 主场景ID
     * @example `1234***`
     */
    Id: string;
    /**
     * 场景名称
     * @example `场景A`
     */
    Name: string;
    /**
     * 场景类型
     * @example `场景类型 3D模型：MODEL_3D 全景图片：PIC 全景视频：VIDEO`
     */
    Type: string;
    /**
     * 子场景数
     * @example `20`
     */
    SubSceneNum: number;
    /**
     * 资源数
     * @example `20`
     */
    SourceNum: number;
    /**
     * 是否已发布 true：已发布：false：未发布
     * @example `false`
     */
    Published: boolean;
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
     * 预览Token
     * @example `d989623696ab4f87a80b8d5b0b0****`
     */
    PreviewToken: string;
    /**
     * 封面地址（模型）
     * @example `www.example.com/xxx/xxx.jpg`
     */
    CoverUrl: string;
    /**
     * 场景状态，init：初始化，published：已发布，publishing：发布中，copying：复制中，making：制作中，publishable：构建成功，makeFailed：制作失败
     * @example `init`
     */
    Status: string;
    /**
     * 状态名称
     * @example `初始化`
     */
    StatusName: string;
    /**
     * 实勘图列表
     */
    Captures: {
        /**
         * 实勘图url
         * @example `http://www.aliyun.com/test1.jpg`
         */
        Url: string;
        /**
         * 图片名称
         * @example `图片名称`
         */
        Title: string;
    }[];
    FloorPlans: {
        /**
         * 楼层索引
         */
        FloorLabel: string;
        /**
         * 楼层名称
         */
        FloorName: string;
        /**
         * 彩色图地址
         */
        ColorMapUrl: string;
        /**
         * 黑白图地址
         */
        MiniMapUrl: string;
    }[];
}
