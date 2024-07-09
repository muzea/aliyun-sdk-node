export interface ApplyScalingGroupRequest {
    /**
     * 配置文件内容。
     * @example `apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment
      labels:
        app: nginx
      spec:
        replicas: 3
        selector:
           matchLabels:
            app: nginx
        template:
          metadata:
            labels:
              app: nginx
            annotations:
              k8s.aliyun.com/eip-bandwidth: 10
              k8s.aliyun.com/eci-with-eip: true
            spec:
              containers:
              - name: nginx
                image: nginx:1.14.2
                ports:
                - containerPort: 80`
     */
    "Content": string;
    /**
     * 所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 可选，默认值 YAML，当前仅支持YAML格式。
     * @example `YAML`
     */
    "Format"?: string;
}
