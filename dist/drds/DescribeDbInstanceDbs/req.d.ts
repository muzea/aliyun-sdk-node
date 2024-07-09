export interface DescribeDbInstanceDbsRequest {
    /**
     * 实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 存储层数据库所属实例的ID。
     * @example `pc-****************`
     */
    "DbInstanceId": string;
    /**
     * <props="china">PolarDB-X高级账号名称，若没有高级账号则无需填写。关于高级账号，详情请参见[账号管理](https://help.aliyun.com/document_detail/98664.html)。</props>
     * <props="intl">DRDS高级账号名称，若无高级账号则无需填写。</props>
     * @example `test`
     */
    "AccountName"?: string;
    /**
     * <props="china">PolarDB-X高级账号密码，若没有高级账号则无需填写。关于高级账号，详情请参见[账号管理](https://help.aliyun.com/document_detail/98664.html)。</props>
     * <props="intl">DRDS高级账号密码，若没有高级账号则无需填写。</props>
     * @example `pwd_111111`
     */
    "Password"?: string;
    /**
     * 数据库存储类型，取值为**POLARDB**或**RDS**。
     * @example `POLARDB`
     */
    "DbInstType"?: string;
}
