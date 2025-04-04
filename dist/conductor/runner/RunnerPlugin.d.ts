import type { ConductorError } from "../../common/errors";
import { IConduit, IChannel, IPlugin } from "../../conduit";
import { PluginClass } from "../../conduit/types";
import { IModulePlugin } from "../module";
import { ModuleClass } from "../module/types/ModuleClass";
import { InternalChannelName, InternalPluginName } from "../strings";
import { Chunk, RunnerStatus } from "../types";
import { IRunnerPlugin, EvaluatorClass } from "./types";
export declare class RunnerPlugin implements IRunnerPlugin {
    name: InternalPluginName;
    private readonly __evaluator;
    private readonly __isCompatibleWithModules;
    private readonly __conduit;
    private readonly __fileRpc;
    private readonly __chunkQueue;
    private readonly __serviceChannel;
    private readonly __ioQueue;
    private readonly __errorChannel;
    private readonly __statusChannel;
    private readonly __serviceHandlers;
    requestFile(fileName: string): Promise<string | undefined>;
    requestChunk(): Promise<Chunk>;
    requestInput(): Promise<string>;
    tryRequestInput(): string | undefined;
    sendOutput(message: string): void;
    sendError(error: ConductorError): void;
    updateStatus(status: RunnerStatus, isActive: boolean): void;
    hostLoadPlugin(pluginName: string): void;
    registerPlugin<Arg extends any[], T extends IPlugin>(pluginClass: PluginClass<Arg, T>, ...arg: Arg): NoInfer<T>;
    unregisterPlugin(plugin: IPlugin): void;
    registerModule<T extends IModulePlugin>(moduleClass: ModuleClass<T>): NoInfer<T>;
    unregisterModule(module: IModulePlugin): void;
    importAndRegisterExternalPlugin(location: string, ...arg: any[]): Promise<IPlugin>;
    importAndRegisterExternalModule(location: string): Promise<IModulePlugin>;
    static readonly channelAttach: InternalChannelName[];
    constructor(conduit: IConduit, [fileChannel, chunkChannel, serviceChannel, ioChannel, errorChannel, statusChannel]: IChannel<any>[], evaluatorClass: EvaluatorClass);
}
