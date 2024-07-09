export interface ListProjectTemplatesResponse {
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
     * 项目模板信息
     */
    templates: {
        /**
         * 创建人的阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 描述信息
         * @example `迭代的具体信息`
         */
        description: string;
        /**
         * 创建时间的时间戳，单位毫秒
         * @example `1623916393000`
         */
        gmtCreate: number;
        /**
         * 修改时间的时间戳，单位毫秒
         * @example `1623916393000`
         */
        gmtModified: number;
        /**
         * 模板类型
         * 0-system
         * 4-custom
         * 16-instance
         * @example `4`
         */
        type: number;
        /**
         * 模板封面
         * @example `https://img.xxxx.png`
         */
        icon: string;
        /**
         * 模板唯一标识符
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        identifier: string;
        /**
         * 修改人的阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        modifier: string;
        /**
         * 模板名称
         * @example `专用模板`
         */
        name: string;
        /**
         * 模板英文名称
         * @example `Test Template`
         */
        nameEn: string;
        /**
         * 所属资源类型
         * @example `Project`
         */
        resourceCategory: string;
        /**
         * 废弃字段
         * @example `null`
         */
        copyFrom: string;
        /**
         * 废弃字段
         * @example `null`
         */
        resourceType: string;
        /**
         * 废弃字段
         * @example `null`
         */
        spaceIdentifier: string;
        /**
         * 废弃字段
         * @example `null`
         */
        spaceType: string;
    }[];
}
