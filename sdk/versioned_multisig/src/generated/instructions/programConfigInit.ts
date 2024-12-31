/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  ProgramConfigInitArgs,
  programConfigInitArgsBeet,
} from '../types/ProgramConfigInitArgs'

/**
 * @category Instructions
 * @category ProgramConfigInit
 * @category generated
 */
export type ProgramConfigInitInstructionArgs = {
  args: ProgramConfigInitArgs
}
/**
 * @category Instructions
 * @category ProgramConfigInit
 * @category generated
 */
export const programConfigInitStruct = new beet.BeetArgsStruct<
  ProgramConfigInitInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', programConfigInitArgsBeet],
  ],
  'ProgramConfigInitInstructionArgs'
)
/**
 * Accounts required by the _programConfigInit_ instruction
 *
 * @property [_writable_] programConfig
 * @property [_writable_, **signer**] initializer
 * @category Instructions
 * @category ProgramConfigInit
 * @category generated
 */
export type ProgramConfigInitInstructionAccounts = {
  programConfig: web3.PublicKey
  initializer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const programConfigInitInstructionDiscriminator = [
  184, 188, 198, 195, 205, 124, 117, 216,
]

/**
 * Creates a _ProgramConfigInit_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ProgramConfigInit
 * @category generated
 */
export function createProgramConfigInitInstruction(
  accounts: ProgramConfigInitInstructionAccounts,
  args: ProgramConfigInitInstructionArgs,
  programId = new web3.PublicKey('5XyhmmQ2dRFpnLtjbWZYkNH46YkEBzaKodnjTR7Cm9er')
) {
  const [data] = programConfigInitStruct.serialize({
    instructionDiscriminator: programConfigInitInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.programConfig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.initializer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
