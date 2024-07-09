export interface DeleteContactTemplatesRequest {
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 待删除的信息模板的编号，传入多个值时使用逗号（,）分隔。
     * 信息模板创建成功后由系统自动生成，您可以调用[QueryRegistrantProfiles](~~67701~~)接口查询信息模板编号。
     * @example `123,45,67`
     */
    "RegistrantProfileIds": string;
}
