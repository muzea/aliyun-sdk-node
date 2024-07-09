export interface ReimageNodesRequest {
    /**
     * 集群id
     * @example `i15dfa12e8f27c44f4a006c2c8bb`
     */
    "ClusterId"?: string;
    /**
     * 节点列表
     */
    "Nodes"?: {
        /**
         * 主机名
         * @example `457db5ca-241d-11ed-9fd7-acde48001122`
         */
        Hostname: string;
        /**
         * 登录密码
         * @example `***`
         */
        LoginPassword: string;
        /**
         * 节点id
         * @example `e01-cn-zvp2tgykr0b`
         */
        NodeId: string;
        /**
         * 系统镜像id
         * @example `m-8vbf8rpv2nn14y7oybjy`
         */
        ImageId: string;
    }[];
    /**
     * 是否允许跳过失败节点，默认值为False
     * @example `False
    `
     */
    "IgnoreFailedNodeTasks"?: boolean;
    /**
     * 自定义数据
     * @example `#!/bin/sh
    echo "Hello World. The time is now $(date -R)!" | tee /root/userdata_test.txt`
     */
    "UserData"?: string;
}
