export interface CreateApplicationAccessPointResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `bcfefe15-46f0-44a3-bd96-3d422474b71a`
     */
    RequestId: string;
    /**
     * 描述信息。
     * @example `aap description`
     */
    Description: string;
    /**
     * 绑定的权限策略。
     * @example `["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]`
     */
    Policies: string;
    /**
     * 应用接入点名称。
     * @example `aap_test`
     */
    Name: string;
    /**
     * 应用接入点的ARN。
     * @example `acs:kms:cn-hangzhou:119285303511****:applicationaccesspoint/aap_test`
     */
    Arn: string;
    /**
     * 认证方式。
     * @example `ClientKey`
     */
    AuthenticationMethod: string;
}
