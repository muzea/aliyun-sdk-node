export interface ApplyEciScalingConfigurationRequest {
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
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
    /**
     * 可选，默认值格式为YAML，当前仅支持YAML格式。
     * @example `YAML`
     */
    "Format"?: string;
    /**
     * 伸缩组的ID。
     * @example `asg-bp1igpak5ft1flyp****`
     */
    "ScalingGroupId": string;
    /**
     * 待修改伸缩配置的ID。
     * 当基于Content配置信息更新ECI类型的伸缩配置时，指定`ScalingConfigurationId`；当未指定`ScalingConfigurationId`时，基于Content配置信息会新建ECI类型的伸缩配置。
     * @example `asc-bp1i65jd06v04vdh****`
     */
    "ScalingConfigurationId"?: string;
}
