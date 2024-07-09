export interface CreateApplicationAccessPointRequest {
    /**
     * 应用接入点名称。
     * @example `aap_test`
     */
    "Name": string;
    /**
     * 描述信息。
     * @example `aap description`
     */
    "Description"?: string;
    /**
     * 认证方式。目前仅支持ClientKey。
     * @example `ClientKey`
     */
    "AuthenticationMethod"?: string;
    /**
     * 绑定的权限策略。
     * >每个应用接入点最多允许绑定3个权限策略。
     * @example `["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]`
     */
    "Policies": string;
}
