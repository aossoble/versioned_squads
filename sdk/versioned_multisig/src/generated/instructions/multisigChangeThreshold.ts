/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  VersionedMultisigChangeThresholdArgs,
  versionedMultisigChangeThresholdArgsBeet,
} from '../types/VersionedMultisigChangeThresholdArgs'

/**
 * @category Instructions
 * @category MultisigChangeThreshold
 * @category generated
 */
export type MultisigChangeThresholdInstructionArgs = {
  args: VersionedMultisigChangeThresholdArgs
}
/**
 * @category Instructions
 * @category MultisigChangeThreshold
 * @category generated
 */
export const multisigChangeThresholdStruct = new beet.FixableBeetArgsStruct<
  MultisigChangeThresholdInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', versionedMultisigChangeThresholdArgsBeet],
  ],
  'MultisigChangeThresholdInstructionArgs'
)
/**
 * Accounts required by the _multisigChangeThreshold_ instruction
 *
 * @property [_writable_] multisig
 * @property [**signer**] configAuthority
 * @property [_writable_, **signer**] rentPayer (optional)
 * @category Instructions
 * @category MultisigChangeThreshold
 * @category generated
 */
export type MultisigChangeThresholdInstructionAccounts = {
  multisig: web3.PublicKey
  configAuthority: web3.PublicKey
  rentPayer?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const multisigChangeThresholdInstructionDiscriminator = [
  141, 42, 15, 126, 169, 92, 62, 181,
]

/**
 * Creates a _MultisigChangeThreshold_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MultisigChangeThreshold
 * @category generated
 */
export function createMultisigChangeThresholdInstruction(
  accounts: MultisigChangeThresholdInstructionAccounts,
  args: MultisigChangeThresholdInstructionArgs,
  programId = new web3.PublicKey('wegmivK2TiR2dbNxMAtR48Y2tVq2hGzp6iK8j3FbUU7')
) {
  const [data] = multisigChangeThresholdStruct.serialize({
    instructionDiscriminator: multisigChangeThresholdInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.multisig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.configAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.rentPayer ?? programId,
      isWritable: accounts.rentPayer != null,
      isSigner: accounts.rentPayer != null,
    },
    {
      pubkey: accounts.systemProgram ?? programId,
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
