export interface GetResourceTypeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    requestId: string;
    /**
     * 资源类型。
     */
    resourceType: {
        /**
         * 产品Code。
         * @example `ECS`
         */
        product: string;
        /**
         * 资源类型。
         * @example `Instance`
         */
        resourceType: string;
        /**
         * 资源类型基础信息。
         */
        info: {
            /**
             * 资源类型名称。
             * @example `Instance`
             */
            title: string;
            /**
             * 资源类型描述。
             * @example `An ECS instance is equivalent to a virtual machine, including the most basic computing components such as CPU, memory, operating system, network, and disk. You can easily customize and change the configuration of the instance. You have full control over the virtual machine.`
             */
            description: string;
            /**
             * 付费形式
             * paid（付费）
             * free（免费）
             * @example `paid`
             */
            chargeType: string;
            /**
             * 交付级别
             * center（中心化部署级别）
             * region（地域部署级别）
             * zone（可用区部署级别）
             * @example `region`
             */
            deliveryScope: string;
        };
        /**
         * 资源属性定义，key是属性名，value为属性详细信息。
         */
        properties: any;
        /**
         * 资源ID。
         * @example `/properties/InstanceId
        `
         */
        primaryIdentifier: string;
        /**
         * 资源创建必填参数集合。
         */
        required: string[];
        /**
         * 公共的属性集合，为资源基本属性。非操作私有参数。
         */
        publicProperties: string[];
        /**
         * 只读参数集合，只在list或者get操作中返回，创建及变更时不作为入参。
         */
        readOnlyProperties: string[];
        /**
         * list操作时可以作为filter参数的属性集合。
         */
        filterProperties: string[];
        /**
         * 可以修改的属性集合。
         */
        updateTypeProperties: string[];
        /**
         * 敏感属性集合，例如密码等。
         */
        sensitiveInfoProperties: string[];
        /**
         * 创建操作私有参数集合。资源查询操作中不会返回的属性，但是创建操作中需要传入的参数。
         */
        createOnlyProperties: string[];
        /**
         * 更新操作私有参数集合。资源查询操作中不会返回的属性，但是更新操作中需要传入的参数。
         */
        updateOnlyProperties: string[];
        /**
         * 查询操作私有参数集合。资源查询操作中不会返回的属性，但是查询操作中需要传入的参数。
         */
        getOnlyProperties: string[];
        /**
         * 列举操作私有参数集合。资源查询操作中不会返回的属性，但是列举操作中需要传入的参数。
         */
        listOnlyProperties: string[];
        /**
         * 删除操作私有参数集合。资源查询操作中不会返回的属性，但是删除操作中需要传入的参数。
         */
        deleteOnlyProperties: string[];
        /**
         * 查询返回的属性集合。
         */
        getResponseProperties: string[];
        /**
         * 列举返回的属性集合。
         */
        listResponseProperties: string[];
        /**
         * 支持的资源操作信息（包括RAM权限）。
         */
        handlers: {
            /**
             * 创建操作关联信息。
             */
            create: {
                /**
                 * 所需RAM权限信息集合。
                 */
                permissions: string[];
            };
            /**
             * 更新操作关联信息。
             */
            update: {
                /**
                 * 所需RAM权限信息集合。
                 */
                permissions: string[];
            };
            /**
             * 查询操作关联信息。
             */
            get: {
                /**
                 * 所需RAM权限信息集合。
                 */
                permissions: string[];
            };
            /**
             * 列举操作关联信息。
             */
            list: {
                /**
                 * 所需RAM权限信息集合。
                 */
                permissions: string[];
            };
            /**
             * 删除操作关联信息。
             */
            delete: {
                /**
                 * 所需RAM权限信息集合。
                 */
                permissions: string[];
            };
        };
    };
}
