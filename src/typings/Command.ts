import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  PermissionResolvable,
} from "discord.js";
import { ExtendedClient } from "../structures/Client";

/**
 * @param  {string} name = "commandname"
 * @param  {string} description = "any description"
 *
 */
interface RunOptions {
  client: ExtendedClient;
  interaction: CommandInteraction;
  args: CommandInteractionOptionResolver;
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
  userPermissions?: PermissionResolvable[];
  cooldown?: number;
  run: RunFunction;
} & ChatInputApplicationCommandData;
