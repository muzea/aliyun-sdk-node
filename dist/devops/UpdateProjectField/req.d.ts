export interface UpdateProjectFieldRequest {
    /**
     * 企业id
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 更新项目的唯一标识，项目id
     * @example `deafe5f33xxxxx6a259d8dafd`
     */
    "identifier": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 更新基础字段数组
         */
        updateBasicFieldRequestList: {
            /**
             * 项目基础属性key
             * @example `name`
             */
            propertyKey: string;
            /**
             * 更新后的值
             * @example `名称`
             */
            propertyValue: string;
        }[];
        /**
         * 更新项目自定义字段数组
         */
        updateForOpenApiList: {
            /**
             * 字段唯一标识
             * @example `c4fd21xxxxxxxx9oj8jk`
             */
            fieldIdentifier: string;
            /**
             * 字段值
             * @example `字段值`
             */
            value: string;
        }[];
        /**
         * 状态唯一标识
         * @example `fdsaadsfasxxxxdddd`
         */
        statusIdentifier: string;
    };
}
