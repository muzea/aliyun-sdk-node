export interface DeleteStackRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 是否保留该资源栈下的所有资源。
     * 取值：
     * - true：保留该资源栈下的所有资源。
     * - false（默认值）：不保留该资源栈下的资源。
     * @example `false`
     */
    "RetainAllResources"?: boolean;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * RAM角色名称。ROS会扮演该角色创建资源栈，使用角色的凭证代表用户进行接口调用。
     * ROS始终将此角色用于资源栈上将进行的操作。只要用户有权在资源栈上进行操作，即使用户无权使用角色，ROS也会使用此角色，确保角色授予最少的权限。
     * 该接口与其他接口不同，如果用户未指定该值，ROS不会使用以前与资源栈关联的角色。如果需要使用角色，请显式指定。如果没有可用角色，ROS将使用从您的用户凭证中生成的临时凭证。
     * RAM角色名称最大长度为64个字节。
     * @example `test-role`
     */
    "RamRoleName"?: string;
    /**
     * 需要保留资源的列表。
     * @example `WebServer`
     */
    "RetainResources"?: string[];
    /**
     * 用于控制删除资源栈的行为。
     */
    "DeleteOptions"?: string[];
    /**
     * 资源最大并发数。
     * 默认为空，用户可以输入大于等于零的整数。
     * > - 若设置为大于零的整数，则使用该整数。
     * - 若设置为零，对于ROS类型资源栈不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * - 若不设置，则使用上次操作时的设置；若上次操作时未设置，对于ROS类型资源栈不限制，Terraform类型资源栈使用Terraform默认值（通常为10）。
     * - 若设置了该值，将与资源栈进行关联，影响资源栈的后续操作。
     * @example `1`
     */
    "Parallelism"?: number;
}
