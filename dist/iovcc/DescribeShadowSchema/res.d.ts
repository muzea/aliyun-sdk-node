export interface DescribeShadowSchemaResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * schema信息
     * @example `[   {     \"id\": 102,     \"name\": \"product:对内型号\",     \"open\": false,     \"pId\": 1,     \"path\": \"/device_info/product\"   },   {     \"id\": 101,     \"name\": \"manufacture:制造商\",     \"open\": false,     \"pId\": 1,     \"path\": \"/device_info/manufacture\"   } ]`
     */
    Schema: string;
}
