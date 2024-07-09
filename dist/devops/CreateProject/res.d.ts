export interface CreateProjectResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 项目信息
     */
    project: {
        /**
         * 空间大类id，这里为Project
         * @example `Project`
         */
        categoryIdentifier: string;
        /**
         * 创建人的阿里云accountID
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 项目编号，四到六位大写字母，企业下唯一
         * @example `OJAY`
         */
        customCode: string;
        /**
         * 描述信息
         * @example `该项目用来跟进测试需求。`
         */
        description: string;
        /**
         * 创建时间的时间戳，单位为毫秒
         * @example `1623916393000`
         */
        gmtCreate: number;
        /**
         * 修改时间的时间戳，单位为毫秒
         * @example `1623916393000`
         */
        gmtModified: number;
        /**
         * 图标
         * @example `https://xxxxxx.png`
         */
        icon: string;
        /**
         * 项目唯一标识符
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        identifier: string;
        /**
         * 项目状态
         * @example `NORMAL`
         */
        logicalStatus: string;
        /**
         * 修改人的阿里云accoutID
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
         * 状态阶段
         * @example `1`
         */
        statusStageIdentifier: string;
        /**
         * 空间小类id
         * @example `CustomProject`
         */
        typeIdentifier: string;
    };
}
