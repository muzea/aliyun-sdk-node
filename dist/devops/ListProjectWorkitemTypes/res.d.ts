export interface ListProjectWorkitemTypesResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误返回码
     * @example `例：Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误返回信息
     * @example `errormessage`
     */
    errorMessage: string;
    /**
     * 接口是否正常返回
     * @example `true或者false`
     */
    success: boolean;
    /**
     * 工作项类型
     */
    workitemTypes: {
        /**
         * 工作项类型id
         * @example `dfexxxxxf4fee18xxxxx36`
         */
        identifier: string;
        /**
         * 工作项类型的名称
         * @example `例：业务类需求`
         */
        name: string;
        /**
         * 工作项类型的英文名称
         * @example `例：Business Requirement`
         */
        nameEn: string;
        /**
         * 工作项类型，需求为Req，缺陷为Bug，任务为Task，风险为Risk
         * @example `Req`
         */
        categoryIdentifier: string;
        /**
         * 是否系统默认，true-系统默认/false-企业创建
         * @example `true`
         */
        systemDefault: boolean;
        /**
         * 创建时间
         * @example `1620455467000`
         */
        gmtCreate: number;
        /**
         * 工作项类型创建人
         * @example `用户阿里云pk，例如19xxxx31947xxxx`
         */
        creator: string;
        /**
         * 描述
         * @example `该类型的具体信息`
         */
        description: string;
        /**
         * 是否启用
         * @example `true或者false`
         */
        enable: boolean;
        /**
         * 在项目中是否为默认类型
         * @example `true或者false`
         */
        defaultType: boolean;
        /**
         * 添加到项目中的时间
         * @example `1641870287000`
         */
        gmtAdd: number;
        /**
         * 添加到项目中的添加人
         * @example `用户阿里云pk，例如19xxxx31947xxxx`
         */
        addUser: string;
    }[];
}
