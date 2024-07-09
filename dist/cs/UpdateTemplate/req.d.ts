export interface UpdateTemplateRequest {
    /**
     * 模板ID。
     * @example `72d20cf8-a533-4ea9-a10d-e7630d3d2708`
     */
    "TemplateId": string;
    /**
     * 请求体参数。
     * @example `webserver01`
     */
    "body"?: {
        /**
         * 部署模板描述信息。
         * @example `web server cluster`
         */
        description: string;
        /**
         * 部署模板名称。
         * @example `webserver01`
         */
        name: string;
        /**
         * 部署模板标签。
         * @example `web`
         */
        tags: string;
        /**
         * YAML格式的模板内容。
         * @example `apiVersion: apps/v1\\nkind: Deployment\\nmetadata:\\n  name: nginx-deployment-basic\\n  labels:\\n    app: nginx\\nspec:\\n  replicas: 2\\n  selector:\\n    matchLabels:\\n      app: nginx\\n  template:\\n    metadata:\\n      labels:\\n        app: nginx\\n    spec:\\n      containers:\\n      - name: nginx\\n        image: busybox:latest\\n        ports:\\n        - containerPort: 8080`
         */
        template: string;
        /**
         * 模板类型，值可以是任意值。
         * - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。
         * - 当取值是`compose`时将在控制台Swarm集群页面显示该模板（已废弃）。
         * @example `kubernetes`
         */
        template_type: string;
    };
}
