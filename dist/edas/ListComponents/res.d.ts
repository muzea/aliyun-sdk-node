export interface ListComponentsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    ComponentList: {
        /**
         * 组件列表。
         */
        Component: {
            /**
             * 组件类型：
             * - JDK
             * - TOMCAT
             * - TENGINE
             * @example `JDK`
             */
            Type: string;
            /**
             * 组件Key。
             * @example `JDK 7`
             */
            ComponentKey: string;
            /**
             * 组件版本。
             * @example `oraclejdk7`
             */
            Version: string;
            /**
             * 是否过期：
             * - false：未过期
             * - true：已过期
             * @example `false`
             */
            Expired: boolean;
            /**
             * 组件ID。
             * @example `1`
             */
            ComponentId: string;
            /**
             * 组件描述。
             * @example `JDK 7`
             */
            Desc: string;
        }[];
    };
}
