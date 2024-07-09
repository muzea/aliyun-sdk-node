export interface UpdateProjectFieldResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `errormessage`
     */
    errorMessage: string;
    /**
     * true/false
     * @example `True`
     */
    success: boolean;
    /**
     * 项目信息
     */
    project: {
        /**
         * 空间大类
         * @example `Project`
         */
        category: string;
        /**
         * 空间大类id，项目的值都是Project
         * @example `Project`
         */
        categoryIdentifier: string;
        /**
         * 创建人阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 自定义编号，企业下唯一
         * @example `OJAY`
         */
        customCode: string;
        /**
         * 描述信息
         * @example `api测试-创建`
         */
        description: string;
        /**
         * 创建时间的时间戳，单位毫秒
         * @example `1623916393000`
         */
        gmtCreate: number;
        /**
         * 修改时间的时间戳，单位毫秒
         * @example `1684134690000`
         */
        gmtModified: number;
        /**
         * 图标组，json格式字符串
         * @example `{"small":"https://xxxxxx.png","big":"https://img.yyyyyy.png"}`
         */
        iconGroup: string;
        /**
         * 图标
         * @example `https://xxxxxx.png`
         */
        icon: string;
        /**
         * 大图标
         * @example `https://xxxxxx.png`
         */
        iconBig: string;
        /**
         * 小图标
         * @example `https://img.yyyyyy.png`
         */
        iconSmall: string;
        /**
         * 项目id
         * @example `66893`
         */
        id: string;
        /**
         * 项目唯一标识符
         * @example `1e2ea73d24652d5874d001b351`
         */
        identifier: string;
        /**
         * 空间路径
         * @example `e8b2xxxxxx2abdxxxxxxxx23`
         */
        identifierPath: string;
        /**
         * 项目状态
         * @example `NORMAL`
         */
        logicalStatus: string;
        /**
         * 修改人阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        modifier: string;
        /**
         * 项目名称
         * @example `demo示例项目`
         */
        name: string;
        /**
         * 企业id
         * @example `5e70xxxxxxcd000xxxxe96`
         */
        organizationIdentifier: string;
        /**
         * 父项目id
         * @example `null`
         */
        parentIdentifier: string;
        /**
         * 可见范围
         * @example `public`
         */
        scope: string;
        /**
         * 状态id
         * @example `8a40xxxxxxxxxxxxx64`
         */
        statusIdentifier: string;
        /**
         * 状态阶段id，项目状态默认有未开始、进行中、已完成，该字段为状态具体的id。
         * @example `8a4058a71159b68254......`
         */
        statusStageIdentifier: string;
        /**
         *
         * 空间小类
         * @example `null`
         */
        subType: string;
        /**
         * 空间小类id，该字段已废弃
         * @example `CustomProject`
         */
        typeIdentifier: string;
        /**
         * 状态名称
         * @example `进行中`
         */
        statusName: string;
        /**
         * 字段列表
         */
        fieldList: {
            /**
             * 字段id
             * @example `b787ff504c0b36f8b71d15a4fd`
             */
            identifier: string;
            /**
             * 展示名称
             * @example `进行时`
             */
            displayName: string;
            /**
             * 字段类型
             * @example `user`
             */
            valueType: string;
            /**
             * 字段值
             * @example `ace3wxxxxxxx7rff3ee`
             */
            value: string;
        }[];
    };
}
