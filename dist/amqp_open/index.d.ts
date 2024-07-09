import { CreateBindingRequest } from "./CreateBinding/req";
import { CreateBindingResponse } from "./CreateBinding/res";
import { CreateExchangeRequest } from "./CreateExchange/req";
import { CreateExchangeResponse } from "./CreateExchange/res";
import { CreateVirtualHostRequest } from "./CreateVirtualHost/req";
import { CreateVirtualHostResponse } from "./CreateVirtualHost/res";
import { CreateQueueRequest } from "./CreateQueue/req";
import { CreateQueueResponse } from "./CreateQueue/res";
import { DeleteBindingRequest } from "./DeleteBinding/req";
import { DeleteBindingResponse } from "./DeleteBinding/res";
import { DeleteExchangeRequest } from "./DeleteExchange/req";
import { DeleteExchangeResponse } from "./DeleteExchange/res";
import { DeleteQueueRequest } from "./DeleteQueue/req";
import { DeleteQueueResponse } from "./DeleteQueue/res";
import { DeleteVirtualHostRequest } from "./DeleteVirtualHost/req";
import { DeleteVirtualHostResponse } from "./DeleteVirtualHost/res";
import { GetMetadataAmountRequest } from "./GetMetadataAmount/req";
import { GetMetadataAmountResponse } from "./GetMetadataAmount/res";
import { ListBindingsRequest } from "./ListBindings/req";
import { ListBindingsResponse } from "./ListBindings/res";
import { ListDownStreamBindingsRequest } from "./ListDownStreamBindings/req";
import { ListDownStreamBindingsResponse } from "./ListDownStreamBindings/res";
import { ListExchangeUpStreamBindingsRequest } from "./ListExchangeUpStreamBindings/req";
import { ListExchangeUpStreamBindingsResponse } from "./ListExchangeUpStreamBindings/res";
import { ListExchangesRequest } from "./ListExchanges/req";
import { ListExchangesResponse } from "./ListExchanges/res";
import { ListQueueConsumersRequest } from "./ListQueueConsumers/req";
import { ListQueueConsumersResponse } from "./ListQueueConsumers/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ListQueueUpStreamBindingsRequest } from "./ListQueueUpStreamBindings/req";
import { ListQueueUpStreamBindingsResponse } from "./ListQueueUpStreamBindings/res";
import { ListVirtualHostsRequest } from "./ListVirtualHosts/req";
import { ListVirtualHostsResponse } from "./ListVirtualHosts/res";
import { ListQueuesRequest } from "./ListQueues/req";
import { ListQueuesResponse } from "./ListQueues/res";
import { UpdateInstanceNameRequest } from "./UpdateInstanceName/req";
import { UpdateInstanceNameResponse } from "./UpdateInstanceName/res";
import { ListAccountsRequest } from "./ListAccounts/req";
import { ListAccountsResponse } from "./ListAccounts/res";
import { DeleteAccountRequest } from "./DeleteAccount/req";
import { DeleteAccountResponse } from "./DeleteAccount/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { UpdateInstanceRequest } from "./UpdateInstance/req";
import { UpdateInstanceResponse } from "./UpdateInstance/res";

interface AMQP_OPEN {
    /**
     * Producer将消息发送到Exchange，Exchange根据创建的绑定关系以及路由规则选择将消息路由到指定的Queue或其他Exchange中。
     */
    CreateBinding(query: CreateBindingRequest): Promise<CreateBindingResponse>;
    /**
     * Producer将消息发送到Exchange，由Exchange将消息路由到一个或多个Queue中（或者丢弃）。Exchange根据Routing Key和Binding Key将消息路由到Queue。
     */
    CreateExchange(query: CreateExchangeRequest): Promise<CreateExchangeResponse>;
    /**
     * Vhost是指虚拟主机，用作逻辑隔离，分别管理各自的Exchange、Queue和Binding，使得应用安全地运行在不同的Vhost上，相互之间不会干扰。Producer和Consumer连接云消息队列 RabbitMQ 版需要指定一个Vhost。
     */
    CreateVirtualHost(query: CreateVirtualHostRequest): Promise<CreateVirtualHostResponse>;
    /**
     * Queue是指消息队列，云消息队列 RabbitMQ 版的消息都会被发送至指定的Exchange，再由Exchange路由至绑定的Queue中。
     */
    CreateQueue(query: CreateQueueRequest): Promise<CreateQueueResponse>;
    /**
     * 调用DeleteBinding解除源Exchange与目标Queue或者其他Exchange的绑定关系。
     */
    DeleteBinding(query: DeleteBindingRequest): Promise<DeleteBindingResponse>;
    /**
     * 调用DeleteExchange删除Exchange。
     */
    DeleteExchange(query: DeleteExchangeRequest): Promise<DeleteExchangeResponse>;
    /**
     * 删除Queue。
     */
    DeleteQueue(query: DeleteQueueRequest): Promise<DeleteQueueResponse>;
    /**
     * 调用DeleteVirtualHost删除Vhost。
     */
    DeleteVirtualHost(query: DeleteVirtualHostRequest): Promise<DeleteVirtualHostResponse>;
    /**
     * 查看指定云消息队列 RabbitMQ 版实例下可创建的Vhost、Exchange、Queue的最大数量以及当前已创建的数量。
     */
    GetMetadataAmount(query: GetMetadataAmountRequest): Promise<GetMetadataAmountResponse>;
    /**
     * 查询指定云消息队列 RabbitMQ 版实例下某一Vhost内所有创建的绑定关系。
     */
    ListBindings(query: ListBindingsRequest): Promise<ListBindingsResponse>;
    /**
     * 查询指定Exchange绑定了哪些Exchange或Queue。
     */
    ListDownStreamBindings(query: ListDownStreamBindingsRequest): Promise<ListDownStreamBindingsResponse>;
    /**
     * 查询指定Exchange被哪些Queue或者其他Exchange绑定。
     */
    ListExchangeUpStreamBindings(query: ListExchangeUpStreamBindingsRequest): Promise<ListExchangeUpStreamBindingsResponse>;
    /**
     * 查询指定实例下某一Vhost内创建的所有Exchange。
     */
    ListExchanges(query: ListExchangesRequest): Promise<ListExchangesResponse>;
    /**
     * 查询指定Queue的在线Consumer客户端。
     */
    ListQueueConsumers(query: ListQueueConsumersRequest): Promise<ListQueueConsumersResponse>;
    /**
     * 查询指定地域下的云消息队列 RabbitMQ 版实例列表以及各实例的基本信息，包括实例接入点、实例规格上限等信息。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 查询指定Queue被哪些Exchange绑定。
     */
    ListQueueUpStreamBindings(query: ListQueueUpStreamBindingsRequest): Promise<ListQueueUpStreamBindingsResponse>;
    /**
     * 查询指定云消息队列 RabbitMQ 版实例下所有的Vhost。
     */
    ListVirtualHosts(query: ListVirtualHostsRequest): Promise<ListVirtualHostsResponse>;
    /**
     * 查询指定云消息队列 RabbitMQ 版实例下某一Vhost内的所有Queue信息。
     */
    ListQueues(query: ListQueuesRequest): Promise<ListQueuesResponse>;
    /**
     * 云消息队列 RabbitMQ 版实例后，实例名称默认为实例ID，您可以自定义修改实例名称，方便区分实例。
     */
    UpdateInstanceName(query: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse>;
    /**
     * 查看指定云消息队列 RabbitMQ 版实例的用户名密码。
     */
    ListAccounts(query: ListAccountsRequest): Promise<ListAccountsResponse>;
    /**
     * 删除用户名密码。
     */
    DeleteAccount(query: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
     * 开源客户端访问云消息队列 RabbitMQ 版服务端时，需要传入用户名和密码进行权限认证，认证通过才允许访问服务端。云消息队列 RabbitMQ 版支持通过阿里云访问控制（RAM）的AccessKey和AccessKey Secret生成用户名和密码。
     */
    CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
     * 创建云消息队列RabbitMQ的实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 更新云消息队列RabbitMQ的实例，升降配规格。
     */
    UpdateInstance(query: UpdateInstanceRequest): Promise<UpdateInstanceResponse>;
}
export default AMQP_OPEN;
