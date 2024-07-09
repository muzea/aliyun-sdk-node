export interface GetAclAttributeResponse {
    /**
     * 请求ID。
     * @example `5D2013F0-85AB-4332-9094-8023A598C2C1`
     */
    RequestId: string;
    /**
     * 访问控制实例ID。
     * @example `acl-xhwhyuo43l0n*****`
     */
    AclId: string;
    /**
     * 访问控制实例DPI功能配置异常关联的智能接入网关设备数量。
     * 您可以通过[ListDpiConfigError](~~197566~~)查看具体的异常信息及相关的智能接入网关设备信息。
     * @example `0`
     */
    ErrorConfigSmartAGCount: number;
    /**
     * 访问控制实例名称。
     * @example `dpi_test`
     */
    AclName: string;
}
