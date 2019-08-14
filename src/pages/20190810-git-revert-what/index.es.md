---
title: Git Revert Que?
date: '2019-08-10'
spoiler: Lo unico que tenemos que decidir es que hacer con el tiempo que se nos ha dado.
---

Si te gusta leer sobre tecnología y cambio climático, estás en el lugar correcto! Me apasiona mucho todo lo que rodea esos temas, haré lo mejor que pueda para desarrollar contenido y escribir sobre cosas que potencialmente puedan ser útiles o interesantes para ti.

**> git revert EARTH** es un juego de palabras sobre un comando de git [git command](https://git-scm.com/docs/git-revert) 
```
git revert HEAD~3
```
De la documentación oficial de git:

Dados uno o mas commits existentes, revierte los cambios que los parches relacionados introducen, y registra algunos nuevos commits que lo documentan. Esto requiere que tu árbol de trabajo esté limpio (sin modificacions del commit de `HEAD`)

Nota: git revert es usado para registrar algunos nuevos commits que revierten el efecto de algunos commits más antiguos (en muchas ocasiones, únicamente uno que no se quiere). Si quieres desaserte de todos los cambios que no se enuentran en un commit en tu directorio de trabajo, deberías ver `git reset`[1], particularmente la opción `--severo`. Si solo quieres extraer archivos específicos como si estos estuvieran en otro commit, deberías consultar `git checkout`[1], específicamente la sintáxis `git checkout <commit> -- <filename>`. Ten cuidado con estas alternativas ya que ambas deshecharán cambios que no pertenecen a un commit en tu directorio de trabajo.


For the purpose of this blog, I would love to translate that previous description like this:

_Given one or more existing **human induced climate alterations**, revert the changes that the related **decisions** introduce, and record **the actions** that **aliviate** them. This **also requires consistent individual and collective clean action** (no **reset and forget**)._

_Note: git revert **EARTH** is used to record some new **actions** to reverse the effect of some earlier **decisions** (often only a faulty one). If you want to throw away all **your will to change** in your (still) working **planet**, you should see `git i-don't-care`[1], particularly the `--hard` option. If you want to **perform only** specific **and easy actions** as they were in another **parts of your life**, you should see `git only-the-easy-things`[1], specifically the `git only-the-easy-things <no-straws> -- <plastic>` syntax. Take care with these alternatives as both will discard **collective action and desperately needed change** in your (still) working **planet**._

![Street protest with a sign displaying: Time is running out](./mika-baumeister-HR8IqMQNT8M-unsplash.jpg "Photo by Mika Baumeister on Unsplash")
