export interface ListSceneResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `4F882EA7-3A1D-0113-94E4-70162C4B***`
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
     * 数据总数
     * @example `100`
     */
    Count: number;
    /**
     * 主场景数据
     */
    List: {
        /**
         * 主场景ID
         * @example `1234****`
         */
        Id: string;
        /**
         * 场景名称
         * @example `场景A`
         */
        Name: string;
        /**
         * 场景类型
         * @example `MODEL_3D`
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
         * @example `d989623696ab4f87a80b8d5b0b00****`
         */
        PreviewToken: string;
        /**
         * 封面地址（模型）
         * @example `www.example.com/xxxx/xxx.jpg`
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
    }[];
}
