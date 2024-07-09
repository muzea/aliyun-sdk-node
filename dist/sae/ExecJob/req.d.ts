export interface ExecJobRequest {
    /**
     * 任务模板ID。
     * @example `ee1a7a07-abcb-4652-a1d3-2d57f415****`
     */
    "AppId": string;
    /**
     * 事件ID，用户自定义。用作幂等使用，相同事件ID仅创建一个任务。
     * @example `custom`
     */
    "EventId"?: string;
    /**
     * 镜像启动命令。该命令必须为容器内存在的可执行的对象。示例如下：
     * ```
     * command:
     *       - echo
     *       - abc
     *       - >
     *       - file0
     * ```
     * 根据上述示例，则`Command="echo", CommandArgs=["abc", ">", "file0"]`。
     * @example `echo`
     */
    "Command"?: string;
    /**
     * 镜像启动命令参数。上述启动命令**Command**所需参数。格式如下：
     * `["a","b"]`
     * 在上述示例中，`CommandArgs=["abc", ">", "file0"]`，其中`["abc", ">", "file0"]`需要转成String类型，里面的格式为JSON数组。如果无此参数，则无需填写。
     * @example `["a","b"]`
     */
    "CommandArgs"?: string;
    /**
     * 容器环境变量参数。支持自定义或引用配置项。如需引用配置项，请先创建ConfigMap实例。更多信息，请参见[CreateConfigMap](~~176914~~)。取值说明如下：
     * - 自定义配置
     *     - **name**：环境变量名称。
     *     - **value**：环境变量值。
     * - 引用配置项
     *     - **name**：环境变量名称。支持引用单个或全部键，如果引用全部键，需输入`sae-sys-configmap-all-<配置项名称>`，例如`sae-sys-configmap-all-test1`。
     *     - **valueFrom**：环境变量引用。取值为`configMapRef`。
     *     - **configMapId**：配置项ID。
     *     - **key**：键。如果引用全部健值，则不设置该字段。
     * @example `[{"name":"envtmp","value":"0"}]`
     */
    "Envs"?: string;
    /**
     * JAR包启动任务选项。任务默认启动命令：
     * `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArg`
     * @example `-Xms4G -Xmx4G`
     */
    "JarStartOptions"?: string;
    /**
     * JAR包启动任务参数。任务默认启动命令：
     * `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
     * @example `custom-args`
     */
    "JarStartArgs"?: string;
    /**
     * 设置WAR包部署任务的启动命令，操作步骤与镜像部署的启动命令配置操作相同。更多信息，请参见[设置启动命令](~~96677~~)。
     * @example `CATALINA_OPTS=\"$CATALINA_OPTS $Options\" catalina.sh run`
     */
    "WarStartOptions"?: string;
    /**
     * 任务触发时间，格式为`yyyy-MM-dd'T'HH:mm:ss'Z'`。
     * @example `2023-09-14T14:25:02Z`
     */
    "Time"?: string;
    /**
     * 任务并发实例数。
     * @example `3`
     */
    "Replicas"?: string;
}
