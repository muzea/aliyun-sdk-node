export interface DescribeHubClusterKubeconfigResponse {
    /**
     * 请求ID。
     * @example `5BE4C329-DCC2-5B61-8F66-112B7D7FC712`
     */
    RequestId: string;
    /**
     * KubeConfig配置内容。
     * @example `
    "\napiVersion: v1\nclusters:\n- cluster:\n    server: https://172.16.11.***:6443\n    certificate-authority-data: LS0tLS1CRU=...\n  name: kubernetes\ncontexts:\n- context:\n    cluster: kubernetes\n    user: \"kubernetes-a****\"\n  name: kubernetes-admin-cc2cbf5802bec4bfa9fae4014d8c****\ncurrent-context: kubernetes-admin-cc2cbf5802bec4bfa9fae4014d8c9****\nkind: Config\npreferences: {}\nusers:\n- name: \"kubernetes-admin\"\n  user:\n    client-certificate-data: LS0tLS1CRU...\n    client-key-data: LS0tCg==...\n"
    `
     */
    Kubeconfig: string;
}
