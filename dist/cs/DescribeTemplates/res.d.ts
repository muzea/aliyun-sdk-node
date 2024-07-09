export interface DescribeTemplatesResponse {
    /**
     * 模板列表。
     */
    templates: {
        /**
         * 用户部署模板的访问权限，取值：
         * - `private`：私有的。
         * - `public`：公共的。
         * - `shared`：可共享的。
         * 默认值：`private`。
         * @example `private`
         */
        acl: string;
        /**
         * 部署模板ID。
         * @example `874ec485-e7e6-4373-8a3b-47bde8ae789f`
         */
        id: string;
        /**
         * 部署模板名称。
         * @example `webserver`
         */
        name: string;
        /**
         * 部署模板描述信息。
         * @example `a web server`
         */
        description: string;
        /**
         * 部署模板的标签，如果不显式指定，默认为模板名称。
         * @example `kubernetes`
         */
        tags: string;
        /**
         * YAML格式的模板内容。
         * @example `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment-basic\n  labels:\n    app: nginx\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: busybox:latest\n        ports:\n        - containerPort: 80`
         */
        template: string;
        /**
         * 模板类型，值可以是任意值。
         * - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。
         * - 当取值是`compose`时将在控制台Swarm集群页面显示该模板（已废弃）。
         * @example `kubernetes`
         */
        template_type: string;
        /**
         * 部署模板创建时间。
         * @example `2020-06-10T16:30:16+08:00`
         */
        created: string;
        /**
         * 部署模板更新时间。
         * @example `2020-06-10T16:30:16+08:00`
         */
        updated: string;
        /**
         * 模板关联的父模板ID，用于实现模板多版本功能（同一模板的不同版本拥有相同的`template_with_hist_id`值）。
         * @example `ad81d115-7c8b-47e7-a222-9c28d7f6e588`
         */
        template_with_hist_id: string;
    }[];
    /**
     * 分页信息。
     */
    page_info: {
        /**
         * 展示当前页数。
         * @example `20`
         */
        page_number: number;
        /**
         * 单页最大数据条数。
         * @example `3`
         */
        page_size: number;
        /**
         * 结果总数。
         * @example `50`
         */
        total_count: number;
    };
}
