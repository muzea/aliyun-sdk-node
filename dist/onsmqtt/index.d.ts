import { ApplyTokenRequest } from "./ApplyToken/req";
import { ApplyTokenResponse } from "./ApplyToken/res";
import { BatchQuerySessionByClientIdsRequest } from "./BatchQuerySessionByClientIds/req";
import { BatchQuerySessionByClientIdsResponse } from "./BatchQuerySessionByClientIds/res";
import { CreateGroupIdRequest } from "./CreateGroupId/req";
import { CreateGroupIdResponse } from "./CreateGroupId/res";
import { DeleteGroupIdRequest } from "./DeleteGroupId/req";
import { DeleteGroupIdResponse } from "./DeleteGroupId/res";
import { ListGroupIdRequest } from "./ListGroupId/req";
import { ListGroupIdResponse } from "./ListGroupId/res";
import { QuerySessionByClientIdRequest } from "./QuerySessionByClientId/req";
import { QuerySessionByClientIdResponse } from "./QuerySessionByClientId/res";
import { QueryTokenRequest } from "./QueryToken/req";
import { QueryTokenResponse } from "./QueryToken/res";
import { RevokeTokenRequest } from "./RevokeToken/req";
import { RevokeTokenResponse } from "./RevokeToken/res";
import { SendMessageRequest } from "./SendMessage/req";
import { SendMessageResponse } from "./SendMessage/res";
import { GetDeviceCredentialRequest } from "./GetDeviceCredential/req";
import { GetDeviceCredentialResponse } from "./GetDeviceCredential/res";
import { RefreshDeviceCredentialRequest } from "./RefreshDeviceCredential/req";
import { RefreshDeviceCredentialResponse } from "./RefreshDeviceCredential/res";
import { RegisterDeviceCredentialRequest } from "./RegisterDeviceCredential/req";
import { RegisterDeviceCredentialResponse } from "./RegisterDeviceCredential/res";
import { UnRegisterDeviceCredentialRequest } from "./UnRegisterDeviceCredential/req";
import { UnRegisterDeviceCredentialResponse } from "./UnRegisterDeviceCredential/res";
import { QueryMqttTraceDeviceRequest } from "./QueryMqttTraceDevice/req";
import { QueryMqttTraceDeviceResponse } from "./QueryMqttTraceDevice/res";
import { QueryMqttTraceMessageOfClientRequest } from "./QueryMqttTraceMessageOfClient/req";
import { QueryMqttTraceMessageOfClientResponse } from "./QueryMqttTraceMessageOfClient/res";
import { QueryMqttTraceMessageSubscribeRequest } from "./QueryMqttTraceMessageSubscribe/req";
import { QueryMqttTraceMessageSubscribeResponse } from "./QueryMqttTraceMessageSubscribe/res";
import { QueryMqttTraceMessagePublishRequest } from "./QueryMqttTraceMessagePublish/req";
import { QueryMqttTraceMessagePublishResponse } from "./QueryMqttTraceMessagePublish/res";
import { RegisterCaCertificateRequest } from "./RegisterCaCertificate/req";
import { RegisterCaCertificateResponse } from "./RegisterCaCertificate/res";
import { GetCaCertificateRequest } from "./GetCaCertificate/req";
import { GetCaCertificateResponse } from "./GetCaCertificate/res";
import { ActiveCaCertificateRequest } from "./ActiveCaCertificate/req";
import { ActiveCaCertificateResponse } from "./ActiveCaCertificate/res";
import { ListCaCertificateRequest } from "./ListCaCertificate/req";
import { ListCaCertificateResponse } from "./ListCaCertificate/res";
import { DeleteCaCertificateRequest } from "./DeleteCaCertificate/req";
import { DeleteCaCertificateResponse } from "./DeleteCaCertificate/res";
import { GetRegisterCodeRequest } from "./GetRegisterCode/req";
import { GetRegisterCodeResponse } from "./GetRegisterCode/res";
import { ListDeviceCertificateRequest } from "./ListDeviceCertificate/req";
import { ListDeviceCertificateResponse } from "./ListDeviceCertificate/res";
import { ActiveDeviceCertificateRequest } from "./ActiveDeviceCertificate/req";
import { ActiveDeviceCertificateResponse } from "./ActiveDeviceCertificate/res";
import { ListDeviceCertificateByCaSnRequest } from "./ListDeviceCertificateByCaSn/req";
import { ListDeviceCertificateByCaSnResponse } from "./ListDeviceCertificateByCaSn/res";
import { DeleteDeviceCertificateRequest } from "./DeleteDeviceCertificate/req";
import { DeleteDeviceCertificateResponse } from "./DeleteDeviceCertificate/res";
import { GetDeviceCertificateRequest } from "./GetDeviceCertificate/req";
import { GetDeviceCertificateResponse } from "./GetDeviceCertificate/res";
import { InactivateDeviceCertificateRequest } from "./InactivateDeviceCertificate/req";
import { InactivateDeviceCertificateResponse } from "./InactivateDeviceCertificate/res";
import { InactivateCaCertificateRequest } from "./InactivateCaCertificate/req";
import { InactivateCaCertificateResponse } from "./InactivateCaCertificate/res";
import { ListDeviceCredentialClientIdRequest } from "./ListDeviceCredentialClientId/req";
import { ListDeviceCredentialClientIdResponse } from "./ListDeviceCredentialClientId/res";
import { QueryCustomAuthPermissionRequest } from "./QueryCustomAuthPermission/req";
import { QueryCustomAuthPermissionResponse } from "./QueryCustomAuthPermission/res";
import { QueryCustomAuthConnectBlackRequest } from "./QueryCustomAuthConnectBlack/req";
import { QueryCustomAuthConnectBlackResponse } from "./QueryCustomAuthConnectBlack/res";
import { AddCustomAuthIdentityRequest } from "./AddCustomAuthIdentity/req";
import { AddCustomAuthIdentityResponse } from "./AddCustomAuthIdentity/res";
import { DeleteCustomAuthConnectBlackRequest } from "./DeleteCustomAuthConnectBlack/req";
import { DeleteCustomAuthConnectBlackResponse } from "./DeleteCustomAuthConnectBlack/res";
import { UpdateCustomAuthIdentityRequest } from "./UpdateCustomAuthIdentity/req";
import { UpdateCustomAuthIdentityResponse } from "./UpdateCustomAuthIdentity/res";
import { UpdateCustomAuthPermissionRequest } from "./UpdateCustomAuthPermission/req";
import { UpdateCustomAuthPermissionResponse } from "./UpdateCustomAuthPermission/res";
import { AddCustomAuthConnectBlackRequest } from "./AddCustomAuthConnectBlack/req";
import { AddCustomAuthConnectBlackResponse } from "./AddCustomAuthConnectBlack/res";
import { DeleteCustomAuthIdentityRequest } from "./DeleteCustomAuthIdentity/req";
import { DeleteCustomAuthIdentityResponse } from "./DeleteCustomAuthIdentity/res";
import { DeleteCustomAuthPermissionRequest } from "./DeleteCustomAuthPermission/req";
import { DeleteCustomAuthPermissionResponse } from "./DeleteCustomAuthPermission/res";
import { AddCustomAuthPermissionRequest } from "./AddCustomAuthPermission/req";
import { AddCustomAuthPermissionResponse } from "./AddCustomAuthPermission/res";
import { QueryCustomAuthIdentityRequest } from "./QueryCustomAuthIdentity/req";
import { QueryCustomAuthIdentityResponse } from "./QueryCustomAuthIdentity/res";

interface ONSMQTT {
    /**
     * Token鉴权方式下，云消息队列 MQTT 版服务端会颁发Token（临时凭证）给客户端，客户端访问云消息队列 MQTT 版服务端时需要携带Token用于权限验证。
     * 本接口用于向云消息队列 MQTT 版申请临时Token。
     */
    ApplyToken(query: ApplyTokenRequest): Promise<ApplyTokenResponse>;
    /**
     * 根据 Client ID 批量查询客户端在线状态。
     */
    BatchQuerySessionByClientIds(query: BatchQuerySessionByClientIdsRequest): Promise<BatchQuerySessionByClientIdsResponse>;
    /**
     * 消息生产者和消费者客户端接入云消息队列 MQTT 版服务端收发消息时，需要指定Client ID，用于唯一标识一个客户端。
     * Client ID由两部分组成，组织形式为<GroupID>@@@<DeviceID>，DeviceID由客户端自定义，GroupID需要提前在云消息队列 MQTT 版服务端创建。
     */
    CreateGroupId(query: CreateGroupIdRequest): Promise<CreateGroupIdResponse>;
    /**
     * 调用DeleteGroupId删除Group ID。
     */
    DeleteGroupId(query: DeleteGroupIdRequest): Promise<DeleteGroupIdResponse>;
    /**
     * 调用ListGroupId查看某实例下的所有Group ID。
     */
    ListGroupId(query: ListGroupIdRequest): Promise<ListGroupIdResponse>;
    /**
     * **QuerySessionByClientId**接口一般用于线上追踪单个设备的运行状态，再根据查询到的信息排查问题。输入Client ID即可查到对应设备是否在线、设备地址等信息。
     */
    QuerySessionByClientId(query: QuerySessionByClientIdRequest): Promise<QuerySessionByClientIdResponse>;
    /**
     * Token鉴权方式下，云消息队列 MQTT 版服务端会颁发Token（临时凭证）给客户端，客户端访问云消息队列 MQTT 版服务端时需要携带Token用于权限验证。
     * Token为临时访问凭证具有一定的时效性，您可以通过本接口查询Token是否失效。
     */
    QueryToken(query: QueryTokenRequest): Promise<QueryTokenResponse>;
    /**
     * 调用RevokeToken接口吊销Token。
     */
    RevokeToken(query: RevokeTokenRequest): Promise<RevokeTokenResponse>;
    /**
     * 从服务端应用向云消息队列 MQTT 版发送单条消息。
     */
    SendMessage(query: SendMessageRequest): Promise<SendMessageResponse>;
    /**
     * 一机一密认证方式下，设备与云消息队列 MQTT 版建立连接时，需要携带提前申请的设备访问凭证信息向云消息队列 MQTT 版发起认证请求，请求通过则允许设备接入服务端。本接口用于查询指定设备的访问凭证。
     */
    GetDeviceCredential(query: GetDeviceCredentialRequest): Promise<GetDeviceCredentialResponse>;
    /**
     * 调用RefreshDeviceCredential更新设备的访问凭证。
     */
    RefreshDeviceCredential(query: RefreshDeviceCredentialRequest): Promise<RefreshDeviceCredentialResponse>;
    /**
     * 一机一密认证方法，即预先为每个设备申请唯一的访问凭证（ClientId、DeviceAccessKeyId和DeviceAccessKeySecret）。当设备与云消息队列 MQTT 版建立连接时，需要将设备访问凭证中的信息按照约定的形式设置到Username和Password中，向云消息队列 MQTT 版发起认证请求，云消息队列 MQTT 版认证通过后激活设备，设备与云消息队列 MQTT 版间才可传输数据。
     * 本接口用于为指定设备申请访问凭证。
     */
    RegisterDeviceCredential(query: RegisterDeviceCredentialRequest): Promise<RegisterDeviceCredentialResponse>;
    /**
     * 一机一密认证方法，即预先为每个设备申请唯一的访问凭证（ClientId、DeviceAccessKeyId和DeviceAccessKeySecret）。当设备与云消息队列 MQTT 版建立连接时，需要将设备访问凭证中的信息按照约定的形式设置到Username和Password中，向云消息队列 MQTT 版发起认证请求，云消息队列 MQTT 版认证通过后激活设备，设备与云消息队列 MQTT 版间才可传输数据。
     * 若您不需要再使用某个设备访问凭证，您可以调用本接口注销指定的设备访问凭证。
     */
    UnRegisterDeviceCredential(query: UnRegisterDeviceCredentialRequest): Promise<UnRegisterDeviceCredentialResponse>;
    /**
     * 分页查询微消息队列MQTT版客户端的设备轨迹。当设备的状态出现异常时，您可以通过该接口查询指定设备的连接历史，帮助您快速定位异常原因。
     */
    QueryMqttTraceDevice(query: QueryMqttTraceDeviceRequest): Promise<QueryMqttTraceDeviceResponse>;
    /**
     * 查询指定设备在一定时间段内的消息列表。当消息的收发不符合预期时，您可以通过该接口查看消息的收发状态等轨迹信息，帮助您快速定位异常原因。
     */
    QueryMqttTraceMessageOfClient(query: QueryMqttTraceMessageOfClientRequest): Promise<QueryMqttTraceMessageOfClientResponse>;
    /**
     * 查询指定消息的投递轨迹。当消息的收发不符合预期时，您可以通过该接口查看订阅该消息的客户端、消息的投递时间等详细信息，帮助您快速定位异常原因。
     */
    QueryMqttTraceMessageSubscribe(query: QueryMqttTraceMessageSubscribeRequest): Promise<QueryMqttTraceMessageSubscribeResponse>;
    /**
     * 查询指定消息的发送轨迹。当消息的收发不符合预期时，您可以通过该接口查看消息的发布时间、发布客户端等详细信息，帮助您快速定位异常原因。
     */
    QueryMqttTraceMessagePublish(query: QueryMqttTraceMessagePublishRequest): Promise<QueryMqttTraceMessagePublishResponse>;
    /**
     * 云消息队列 MQTT 版支持X.509证书认证，客户端可通过设备证书完成接入认证。CA证书用于为客户端签发设备证书，并验证设备证书的正确性，您需要先将申请的CA证书注册到云消息队列 MQTT 版的服务端上，才能用于认证设备证书。本接口用于将指定CA证书注册到云消息队列 MQTT 版服务端。
     */
    RegisterCaCertificate(query: RegisterCaCertificateRequest): Promise<RegisterCaCertificateResponse>;
    /**
     * 云消息队列 MQTT 版支持X.509证书认证，客户端可通过设备证书完成接入认证。CA证书用于为客户端签发设备证书，并验证设备证书的正确性。
     * 您可以调用本接口查询指定CA证书的证书内容以及激活状态等详细信息。
     */
    GetCaCertificate(query: GetCaCertificateRequest): Promise<GetCaCertificateResponse>;
    /**
     * 云消息队列 MQTT 版支持X.509证书认证，客户端可通过设备证书完成接入认证。CA证书用于为客户端签发设备证书，并验证设备证书的正确性，需要在激活状态下使用。
     * CA证书注册后默认为激活状态，若您需要使用的CA证书被修改为未激活状态，您可以调用本接口将CA证书重新激活。
     */
    ActiveCaCertificate(query: ActiveCaCertificateRequest): Promise<ActiveCaCertificateResponse>;
    /**
     * 云消息队列 MQTT 版支持X.509证书认证，客户端可通过设备证书完成接入认证。CA证书用于为客户端签发设备证书，并验证设备证书的正确性。
     * 本接口用于查询指定实例下所有注册的CA证书。
     */
    ListCaCertificate(query: ListCaCertificateRequest): Promise<ListCaCertificateResponse>;
    /**
     * 云消息队列 MQTT 版支持X.509证书认证，客户端可通过设备证书完成接入认证。CA证书用于为客户端签发设备证书，并验证设备证书的正确性。
     * 使用CA证书需要先将证书注册到云消息队列 MQTT 版服务端，若您不再需要使用某个CA证书，您可以调用DeleteCaCertificate接口将该证书从服务端记录中删除。
     */
    DeleteCaCertificate(query: DeleteCaCertificateRequest): Promise<DeleteCaCertificateResponse>;
    /**
     * 注册CA证书到云消息队列 MQTT 版服务端时，需要上传CA证书的验证证</span>书，用于验证用户是否有该CA证书的私钥。CA证书的验证证书需要通过CA证书的注册码生成，本接口用于获取指定CA证书的注册码。
     */
    GetRegisterCode(query: GetRegisterCodeRequest): Promise<GetRegisterCodeResponse>;
    /**
     * 设备证书是由CA根证书签发给客户端设备使用的数字证书，用于客户端和服务端连接时，服务端对客户端进行安全认证。认证通过后服务端和客户端可基于证书内的加密密钥进行安全通信，若认证不通过则服务端拒绝客户端接入。
     * 本接口用于查询指定实例下所有注册的设备证书。
     */
    ListDeviceCertificate(query: ListDeviceCertificateRequest): Promise<ListDeviceCertificateResponse>;
    /**
     * 设备证书是由CA根证书签发给客户端设备使用的数字证书，用于客户端和服务端连接时，服务端对客户端进行安全认证。
     * 客户端设备使用设备证书进行接入认证时，服务端会根据已注册的CA证书验证设备证书是否正确，若CA证书和设备证书匹配成功，则客户端认证通过，且系统会将该设备证书自动注册到服务端中。
     * 设备证书在服务端注册后默认为激活状态，若您需要使用的设备证书被修改为未激活状态，您可以调用本接口将设备证书重新激活。
     */
    ActiveDeviceCertificate(query: ActiveDeviceCertificateRequest): Promise<ActiveDeviceCertificateResponse>;
    /**
     * 设备证书是由CA根证书签发给客户端设备使用的数字证书，用于客户端和服务端连接时，服务端对客户端进行安全认证。认证通过后服务端和客户端可基于证书内的加密密钥进行安全通信，若认证不通过则服务端拒绝客户端接入。
     * 本接口用于查询由指定CA证书签发且已在微消息队列MQTT版服务端注册的所有设备证书。
     */
    ListDeviceCertificateByCaSn(query: ListDeviceCertificateByCaSnRequest): Promise<ListDeviceCertificateByCaSnResponse>;
    /**
     * 设备证书是由CA根证书签发给客户端设备使用的数字证书，用于客户端和服务端连接时，服务端对客户端进行安全认证。认证通过后服务端和客户端可基于证书内的加密密钥进行安全通信，若认证不通过则服务端拒绝客户端接入。
     * 若您不想需要使用某个设备证书，您可以调用本接口将指定设备证书的注册信息从服务端的存储记录中删除。
     */
    DeleteDeviceCertificate(query: DeleteDeviceCertificateRequest): Promise<DeleteDeviceCertificateResponse>;
    /**
     * 设备证书是由CA根证书签发给客户端设备使用的数字证书，用于客户端和服务端连接时，服务端对客户端进行安全认证。认证通过后服务端和客户端可基于证书内的加密密钥进行安全通信，若认证不通过则服务端拒绝客户端接入。
     * 您可以调用本接口获取设备证书的详细信息。
     */
    GetDeviceCertificate(query: GetDeviceCertificateRequest): Promise<GetDeviceCertificateResponse>;
    /**
     * 设备证书是由CA根证书签发给客户端设备使用的数字证书，用于客户端和服务端连接时，服务端对客户端进行安全认证。认证通过后服务端和客户端可基于证书内的加密密钥进行安全通信，若认证不通过则服务端拒绝客户端接入。
     * 若您暂时不需要使用某个设备证书，可通过该接口注销设备证书，将设备证书状态变成未激活。
     */
    InactivateDeviceCertificate(query: InactivateDeviceCertificateRequest): Promise<InactivateDeviceCertificateResponse>;
    /**
     * 微消息队列MQTT版支持X.509证书认证，客户端可通过设备证书完成接入认证。CA证书用于为客户端签发设备证书，并验证设备证书的正确性。
     * 若您暂时不需要使用某个CA证书，可通过本接口注销CA证书，将CA证书状态变成未激活。当您需要继续使用该CA证书时，可通过ActiveCaCertificate接口将CA证书重新激活。
     */
    InactivateCaCertificate(query: InactivateCaCertificateRequest): Promise<InactivateCaCertificateResponse>;
    /**
     * 用于查询指定实例下有哪些设备申请了设备访问凭证（一机一密）。
     */
    ListDeviceCredentialClientId(query: ListDeviceCredentialClientIdRequest): Promise<ListDeviceCredentialClientIdResponse>;
    /**
     * 查询Topic授权信息。
     */
    QueryCustomAuthPermission(query: QueryCustomAuthPermissionRequest): Promise<QueryCustomAuthPermissionResponse>;
    /**
     * 查询连接黑名单。
     */
    QueryCustomAuthConnectBlack(query: QueryCustomAuthConnectBlackRequest): Promise<QueryCustomAuthConnectBlackResponse>;
    /**
     * 添加账号身份认证信息，可以具体到客户端。
     */
    AddCustomAuthIdentity(query: AddCustomAuthIdentityRequest): Promise<AddCustomAuthIdentityResponse>;
    /**
     * 删除连接黑名单。
     */
    DeleteCustomAuthConnectBlack(query: DeleteCustomAuthConnectBlackRequest): Promise<DeleteCustomAuthConnectBlackResponse>;
    /**
     * 更新自定义身份认证。
     */
    UpdateCustomAuthIdentity(query: UpdateCustomAuthIdentityRequest): Promise<UpdateCustomAuthIdentityResponse>;
    /**
     * 更新Topic资源授权信息。
     */
    UpdateCustomAuthPermission(query: UpdateCustomAuthPermissionRequest): Promise<UpdateCustomAuthPermissionResponse>;
    /**
     * 添加连接黑名单，禁用某个设备连接。
     */
    AddCustomAuthConnectBlack(query: AddCustomAuthConnectBlackRequest): Promise<AddCustomAuthConnectBlackResponse>;
    /**
     * 删除自定义身份认证。
     */
    DeleteCustomAuthIdentity(query: DeleteCustomAuthIdentityRequest): Promise<DeleteCustomAuthIdentityResponse>;
    /**
     * 删除Topic授权。
     */
    DeleteCustomAuthPermission(query: DeleteCustomAuthPermissionRequest): Promise<DeleteCustomAuthPermissionResponse>;
    /**
     * 添加Topic资源授权信息，且需要在控制台提前创建一级Topic。
     */
    AddCustomAuthPermission(query: AddCustomAuthPermissionRequest): Promise<AddCustomAuthPermissionResponse>;
    /**
     * 查询自定义身份认证。
     */
    QueryCustomAuthIdentity(query: QueryCustomAuthIdentityRequest): Promise<QueryCustomAuthIdentityResponse>;
}
export default ONSMQTT;
