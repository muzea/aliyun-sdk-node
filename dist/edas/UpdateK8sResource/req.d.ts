export interface UpdateK8sResourceRequest {
    /**
     * 集群ID。
     * @example `2e7059e9-2d********5e8ecac64ff`
     */
    "ClusterId"?: string;
    /**
     * K8s命名空间ID。
     * @example `app-namespace`
     */
    "Namespace"?: string;
    /**
     * YAML格式的描述内容。
     * @example `apiVersion: apps/v1 kind: Deployment metadata:   name: demo-app   namespace: app-namespace spec:   replicas: 3   selector:     matchLabels:       cluster: abc   template: # create pods using pod definition in this template     metadata:       labels:         cluster: abc     spec:       containers:       - image: registry-vpc.cn-hangzhou.aliyuncs.com/edas-demo-image/consumer:1.0         imagePullPolicy: Always         name: test-container         ports:         - containerPort: 80         env:         - name: foo           value: bar`
     */
    "ResourceContent"?: string;
}
